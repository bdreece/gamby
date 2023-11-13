package piece

import "github.com/bdreece/gamby/pkg/entity/color"

type pawn struct {
	color color.Color
}

// Color implements Piece.
func (p pawn) Color() color.Color {
	return p.color
}

// Moves implements Piece.
func (*pawn) Moves() []string {
	panic("unimplemented")
}

// MarshalJSON implements Piece.
func (*pawn) MarshalJSON() ([]byte, error) {
	panic("unimplemented")
}

// UnmarshalJSON implements Piece.
func (*pawn) UnmarshalJSON([]byte) error {
	panic("unimplemented")
}

func NewPawn(c color.Color) Piece {
	return &pawn{c}
}
