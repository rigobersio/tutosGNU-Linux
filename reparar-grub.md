# live debian
###### Ojo que esto es para el sistema de archivos <MBR>, para gpt o efi aveces solo es cuestion de **bios**

1, Tras arrancar el Live, necesitamos localizar las particiones de los distintos discos duros:

```bash
sudo fdisk -l
OR sydo gparted
```

2. Montar la partición del SO (en la mayoría de los casos esta partición será sda1 o sda2). Lo normal es que el disco tambien sea <sda>, pero pudria ser otro como <sdb>. Tambien hay que montar el resto de dispositios.

```bash
sudo mount /dev/sdaX /mnt


sudo mount --bind /dev /mnt/dev 
sudo mount --bind /dev/pts /mnt/dev/pts 
sudo mount --bind /proc /mnt/proc 
sudo mount --bind /sys /mnt/sys
```

3. Ejecutar el comando chroot de forma que accedemos como root al sistema de archivos del SO:


```bash
sudo chroot /mnt
```

4. instalar Grub en el MBR con:


```bash
grub-install --boot-directory=/boot/ --recheck /dev/sda
reboot
````


si no da error probar simplemente con:

```bash
sudo grub-install /dev/sda
```

Es sda sin el número, es solo el el disco que arranca los `sistemas operativos`.


5. Reiniciar y actualizar

Se puede ajustar en el menú del GRUB manualmente editando la configuración si falta algún SO, o hacerlo automáticamente con el siguiente comando:

```bash
sudo update-grub2
```

# En Arch

1. Instalamos el efibootmgr:


```bash
pacman -S efibootmgr
```

2. Instalar el grub:

```bash
sudo grub-install /dev/sda
sudo grub-mkconfig -o /boot/grub/grub.cfg
reboot
```

3. Reiniciar y actualizar

Se puede ajustar en el menú del GRUB manualmente editando la configuración si falta algún SO, o hacerlo automáticamente con el siguiente comando:

```bash
sudo update-grub2
``` 

 

Fin :)