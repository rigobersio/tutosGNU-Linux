// tutorial para crear archivo de intercambio
convertir a archivo HTML

Crear el fichero de intercambio (eligiendo el tamaño cambiando 5G por el valor que queramos darle):

sudo fallocate -l 5G /swapfile

A continuación, le damos permisos para que solo root pueda escribir en dicho fichero con:

sudo chmod 600 /swapfile

Damos al archivo una estructura para poder funcionar como archivo de intercambio con:

sudo mkswap /swapfile

Y, por último, lo activamos con:

sudo swapon /swapfile

// hacer que el archivo inicia autimaticamente


sudo nano /etc/fstab


// Luego, agrega la siguiente línea al archivo /etc/fstab:


/swapfile swap swap defaults 0 0



Swappiness: elegir cuándo queremos que Linux lo use

Por defecto, Ubuntu (y muchas distros Linux) tienen configurado un swappiness por defecto de 60. Esto significa que el Swap no se usa hasta que se use el 60% de la memoria RAM. A partir de ese umbral es cuando se empieza a usar la memoria de intercambio.

Este valor podemos modificarlo editando el siguiente fichero con un editor con permisos de root:

nano /proc/sys/vm/swappiness

editar a 97