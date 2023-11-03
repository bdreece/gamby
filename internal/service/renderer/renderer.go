package renderer

import (
	"fmt"
	"html/template"
	"io"
)

type Renderer interface {
	Render(w io.Writer, name string, data any, layout bool) error
}

type renderer struct {
	tmpl *template.Template
}

func New(t *template.Template) Renderer {
	return &renderer{t}
}

func (r *renderer) Render(w io.Writer, name string, data any, layout bool) error {
	if layout {
		return r.renderPage(w, name, data)
	} else {
		return r.renderPartial(w, name, data)
	}
}

func (r *renderer) renderPage(w io.Writer, name string, data any) error {
	t, err := r.tmpl.Clone()
	if err != nil {
		return err
	}

	_, err = t.New("content").Parse(fmt.Sprintf(`{{template "%s"}}`, name))
	if err != nil {
		return err
	}

	return t.ExecuteTemplate(w, "layout", data)
}

func (r *renderer) renderPartial(w io.Writer, name string, data any) error {
	t, err := r.tmpl.Clone()
	if err != nil {
		return err
	}

	return t.ExecuteTemplate(w, name, data)
}
