#!/bin/bash
if ! [ -d "$1/classes/" ]; then
	mkdir "$1/classes"
fi

#if [ -f "$1/classes/$2.class" ]; then
#	if ! [ -d "classes/old/" ]; then
#		mkdir "$1/classes/old"
#	fi
#	mv -f "$1/classes/$2.class" "$1/classes/old/$2.class"
#fi
rm -f "$1/classes/$2.class"

/home/misha/jdk1.8.0_65/bin/javac -d "$1/classes" "$1/$2.java"
if ! [ -f "$1/classes/$2.class" ]; then
	line
fi
