package main

import (
	"handler"
	"server"
)

func main() {
	// Instantiate server
	dbURL := "mongodb://hojason117:cen5035se@ds139921.mlab.com:39921/twitterbaby"
	srvAddr := "ec2-18-219-112-104.us-east-2.compute.amazonaws.com:1324"
	//srvAddr := "localhost:1323"
	h := handler.NewHandler(dbURL)
	e := server.NewServer(h)

	// Initiate parallel server control
	go server.TerminalControl(e, h, srvAddr)

	// Start server
	e.Logger.Fatal(e.Start(srvAddr))
}
