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

sudo nano /etc/sysctl.conf

// agregar 

vm.swappiness=0
vm.vfs_cache_pressure=50

Aplicar los cambios ejecutando el siguiente comando en la terminal:

sudo sysctl -p


¿que la memoria caché se vacié implica que eso datos son eliminados?
  ¿donde se almacenan estos datos? ¿cual es el valor de vm.vfs_cache_
  pressure por defectos en debian? ¿cual es el mejor valor para que 
  el navegador web, o programas como node o npm (programas que los 
  	programadores web ocupan con más frecuencia) den un alto rendimiento?

Cuando se habla de vaciar la memoria caché, no implica necesariamente que
 los datos sean eliminados permanentemente. La memoria caché es una memoria 
 temporal que almacena copias de datos frecuentemente utilizados para acelerar 
 el acceso a ellos. Cuando la memoria caché se vacía, simplemente se liberan
  los recursos utilizados por esos datos en la memoria, pero los datos
   originales aún pueden estar disponibles en el sistema o en almacenamiento
    secundario, como el disco duro.

La memoria caché del sistema se almacena en la memoria RAM y está compuesta
 por diferentes tipos de cachés, como la caché de páginas, la caché de
  directorios, la caché de inodos, entre otras, dependiendo del sistema 
  operativo y del sistema de archivos utilizado.

En cuanto al valor predeterminado de vm.vfs_cache_pressure en Debian, es 100.
 Esto significa que el kernel del sistema operativo es más agresivo al liberar 
 la memoria caché del sistema de archivos para dejar más memoria disponible para
  las aplicaciones. Es importante destacar que los valores predeterminados pueden
   variar dependiendo de la distribución de Linux y la versión específica que estés
    utilizando.

El mejor valor para vm.vfs_cache_pressure puede depender del escenario de uso
 específico y de tus necesidades. Un valor de 100 es un equilibrio razonable para
  la mayoría de los sistemas, ya que permite liberar la memoria caché de manera más
   agresiva y proporcionar más memoria disponible para las aplicaciones. Sin embargo,
    si deseas priorizar el rendimiento del navegador web o programas como Node.js y npm,
     podrías experimentar con valores más bajos, como 50, para mantener la memoria caché 
     durante más tiempo y reducir la necesidad de cargar los datos nuevamente.

Es importante tener en cuenta que el ajuste de estos valores puede tener un 
impacto en el rendimiento general del sistema y los resultados pueden variar
 según la configuración y los recursos disponibles. Se recomienda realizar 
 pruebas y monitorear el rendimiento del sistema para encontrar el valor óptimo 
 para tu caso específico.