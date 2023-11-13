package board

import (
	"github.com/bdreece/gamby/pkg/entity/color"
	"github.com/bdreece/gamby/pkg/entity/piece"
)

type Board struct {
	Pieces         []piece.Piece
	ActiveColor    color.Color
	CastlingRights string
	HalftimeClock  int
	FulltimeClock  int
}

var (
	black []piece.Piece = []piece.Piece{
		piece.NewRook(color.Black),
		piece.NewKnight(color.Black),
		piece.NewBishop(color.Black),
		piece.NewKing(color.Black),
		piece.NewQueen(color.Black),
		piece.NewBishop(color.Black),
		piece.NewKnight(color.Black),
		piece.NewRook(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
		piece.NewPawn(color.Black),
	}

	white []piece.Piece = []piece.Piece{
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewPawn(color.White),
		piece.NewRook(color.White),
		piece.NewKnight(color.White),
		piece.NewBishop(color.White),
		piece.NewKing(color.White),
		piece.NewQueen(color.White),
		piece.NewBishop(color.White),
		piece.NewKnight(color.White),
		piece.NewRook(color.White),
	}
)

func New() *Board {
	return &Board{
		Pieces:         make([]piece.Piece, 64, 64),
		ActiveColor:    color.White,
		CastlingRights: "kqKQ",
	}
}

func Default() *Board {
	b := New()
	copy(b.Pieces[:16], black)
	copy(b.Pieces[48:], white)

	return b
}

func Parse(fen string) (*Board, error) {
	panic("unimplemented")
}

func (b Board) Clone() *Board {
	ret := Board{
		ActiveColor:    b.ActiveColor,
		CastlingRights: b.CastlingRights,
		HalftimeClock:  b.HalftimeClock,
		FulltimeClock:  b.FulltimeClock,
	}

	copy(ret.Pieces, b.Pieces)
	return &ret
}

func (b *Board) Advance(move string) {
	panic("unimplemented")
}
