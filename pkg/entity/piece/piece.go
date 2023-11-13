package piece

import (
	"encoding/json"

	"github.com/bdreece/gamby/pkg/entity/color"
)

type Piece interface {
	json.Marshaler
	json.Unmarshaler

	Color() color.Color
	Moves() []string
}
