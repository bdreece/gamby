package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type bishop struct {
	color color.Color
}

// Color implements Piece.
func (b bishop) Color() color.Color {
	return b.color
}

// Moves implements Piece.
func (*bishop) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Marshaler.
func (*bishop) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Unmarshaler.
func (*bishop) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewBishop(c color.Color) Piece {
	return &bishop{c}
}
