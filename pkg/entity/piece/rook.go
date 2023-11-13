package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type rook struct {
	color color.Color
}

// Color implements Piece.
func (r rook) Color() color.Color {
	return r.color
}

// Moves implements Piece.
func (*rook) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Piece.
func (*rook) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Piece.
func (*rook) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewRook(c color.Color) Piece {
	return &rook{c}
}
