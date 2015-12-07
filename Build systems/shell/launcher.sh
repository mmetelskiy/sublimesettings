echo "Enter name:"
read name

echo "#!/usr/bin/env xdg-open" > "/home/debian/Рабочий стол/$name.desktop"
echo "" >> "/home/debian/Рабочий стол/$name.desktop"
echo "[Desktop Entry]" >> "/home/debian/Рабочий стол/$name.desktop"
echo Version=1.0 >> "/home/debian/Рабочий стол/$name.desktop"
echo Type=Application >> "/home/debian/Рабочий стол/$name.desktop"
echo Terminal=false >> "/home/debian/Рабочий стол/$name.desktop"
echo Exec= >> "/home/debian/Рабочий стол/$name.desktop"
echo Name=$name >> "/home/debian/Рабочий стол/$name.desktop"
echo Comment= >> "/home/debian/Рабочий стол/$name.desktop"
echo Icon= >> "/home/debian/Рабочий стол/$name.desktop"

chmod +x "/home/debian/Рабочий стол/$name.desktop"
