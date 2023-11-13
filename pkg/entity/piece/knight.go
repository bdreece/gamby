package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type knight struct {
	color color.Color
}

// Color implements Piece.
func (k knight) Color() color.Color {
	return k.color
}

// Moves implements Piece.
func (k knight) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Marshaler.
func (k *knight) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Unmarshaler.
func (k *knight) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewKnight(c color.Color) Piece {
	return &knight{c}
}
