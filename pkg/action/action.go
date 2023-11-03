package action

type Action[I, O any] interface {
	Execute(I) O
}
