package main

import (
	"server"
	"handler"
)

func main() {
	// Instantiate server
	dbURL := "mongodb://hojason117:cen5035se@ds139921.mlab.com:39921/twitterbaby"
	srvAddr := "localhost:1323"
	h := handler.NewHandler(dbURL)
	e := server.NewServer(h)

	// Initiate parallel server control
	go server.TerminalControl(e, h, srvAddr)

	// Start server
	e.Logger.Fatal(e.Start(srvAddr))
}