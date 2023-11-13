package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type queen struct {
	color color.Color
}

// Color implements Piece.
func (q queen) Color() color.Color {
	return q.color
}

// Moves implements Piece.
func (*queen) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Piece.
func (*queen) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Piece.
func (*queen) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewQueen(c color.Color) Piece {
	return &queen{c}
}
