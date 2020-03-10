package graphql

import (
	"errors"

	"github.com/graphql-go/graphql"
	"github.com/jexia/maestro/refs"
	"github.com/jexia/maestro/specs"
	"github.com/jexia/maestro/specs/types"
)

// ErrInvalidObject is thrown when the given property is not of type message
var ErrInvalidObject = errors.New("graphql only supports object types as root elements")

// NewObject constructs a new graphql object of the given specs
func NewObject(name string, specs *specs.Property) (*graphql.Object, error) {
	if specs.Type != types.TypeMessage {
		return nil, ErrInvalidObject
	}

	fields := graphql.Fields{}
	for _, nested := range specs.Nested {
		if nested.Type == types.TypeMessage {
			continue
		}

		fields[nested.Name] = &graphql.Field{
			Type: gtypes[nested.Type],
		}
	}

	config := graphql.ObjectConfig{
		Name:   name,
		Fields: fields,
	}

	return graphql.NewObject(config), nil
}

// NewArgs construct new field config arguments for the graphql schema
func NewArgs(specs *specs.Property) (graphql.FieldConfigArgument, error) {
	args := graphql.FieldConfigArgument{}
	if specs.Type != types.TypeMessage {
		return args, nil
	}

	if len(specs.Nested) == 0 {
		return nil, nil
	}

	for _, nested := range specs.Nested {
		if nested.Type == types.TypeMessage {
			continue
		}

		args[nested.Name] = &graphql.ArgumentConfig{
			Type: gtypes[nested.Type],
		}
	}

	return args, nil
}

// ResponseValue constructs the response value send back to the client
func ResponseValue(specs *specs.Property, refs *refs.Store) (interface{}, error) {
	if specs.Type != types.TypeMessage {
		return nil, ErrInvalidObject
	}

	result := make(map[string]interface{}, len(specs.Nested))
	for _, nested := range specs.Nested {
		ref := refs.Load(nested.Reference.Resource, nested.Reference.Path)
		result[nested.Name] = ref.Value
	}

	return result, nil
}
