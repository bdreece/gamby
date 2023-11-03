package responder

import "net/http"

type Responder[T any] interface {
	Respond(w http.ResponseWriter, data T) error
}
