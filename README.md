# Wie bringe ich die Seite zum Laufen (Ubuntu/Debian Apache2)

1. Super User!
```bash
sudo bash
```
2. Apache Server installieren
```bash
apt install apache2
```
3. Dieses Verzeichnis von GitHub klonen

``Document Root``'s von Apache-Seiten liegen normalerweisse in ``/var/www/``.
also ...
```bash
cd /var/www/
```
und anschliessend klonen und Rechte an den User des Webservers geben
```bash
git clone https://github.com/OpenHistoricalDataMap/WebUndEditor.git
chown -R www-data:www-data WebUndEditor
```

4. Apache konfigurieren

Danach erstellt ihr mit dem Editor eurer Wahl eine `.conf`-Datei in `/etc/apache2/sites-available`.
```bash
vim OHDM_Editor.conf
```
Die Datei sollte in etwa so aussehen:
```apacheconfig
<VirtualHost *:80>
    ServerName "<URL>"
    ServerAdmin webmaster@<URL>
    DocumentRoot /var/www/WebUndEditor
    ErrorLog ${APACHE_LOG_DIR}/WebUndEditor_error.log
    CustomLog ${APACHE_LOG_DIR}/WebUndEditor_access.log combined
    
    <Directory /var/www/WebUndEditor/>
		Options +FollowSymlinks
		AllowOverride All
		<IfModule mod_dav.c>
			Dav off
		</IfModule>
	</Directory>
</VirtualHost>
```

5. Seite online stellen
```bash
a2ensite OHDM_Editor.conf
service apache2 reload

# Super user out
exit
```
