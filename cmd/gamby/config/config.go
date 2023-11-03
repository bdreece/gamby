package config

import (
	"encoding/json"
	"io"
	"os"
)

type Config struct {
	Mode         string `json:"mode"`
	LogLevel     int    `json:"log_level"`
	LogDirectory string `json:"log_dir"`
}

func FromFile(path string) (*Config, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}

	return FromReader(f)
}

func FromReader(r io.Reader) (*Config, error) {
	d := json.NewDecoder(r)
	c := new(Config)
	err := d.Decode(c)
	if err != nil {
		return nil, err
	}

	return c, nil
}
