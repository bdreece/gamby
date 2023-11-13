package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type king struct {
	color color.Color
}

// Color implements Piece.
func (k king) Color() color.Color {
	return k.color
}

// Moves implements Piece.
func (*king) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Marshaler.
func (*king) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Unmarshaler.
func (*king) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewKing(c color.Color) Piece {
	return &king{c}
}
