#!/bin/bash
cd "$1"
if [ -f "$2.class" ]; then
	/home/misha/jdk1.8.0_65/bin/java "$2"
	line
#elif [ -f "old/$2.class" ]; then
#	echo '=======OLD======='
#	cd old
#	java "$2"
#	line
fi
