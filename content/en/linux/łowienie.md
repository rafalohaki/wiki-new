---
title: łowienie
description: 'This wiki is meant to be the extended documentation for both end users and developers, so it is separated in those two categories.'
position: 21
category: Przykłady
---

The Linux (and UNIX) file system is a hierarchical structure of files and directories that make up a Linux operating system.

In Linux, everything is a file. Unlike Windows where there are many other object types that can either be a physical device, and inter-process communication is done by a kernel call.

<alert>
If you don't like reading text, you can watch this video below from Linode! (Not sponsored)

<iframe width="560" height="315" src="https://www.youtube.com/embed/P0QZnAnsQ4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</alert>

## The File System Hierarchy

The file system hierarchy is a set of directories that appear under the root directory `/`. They not only contain normal files, but also physical devices, virtual devices, and various other special files that control the system itself.

The directory structure is as follows:

| Directory | Description                                                                                                                                                                                                 |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /         | The root directory, contains the all the other directories and files.                                                                                                                                       |
| /bin      | Contains executables and command binares that are required for the system to function.                                                                                                                      |
| /boot     | The Boot loader, this may usually be in a seperate partition.                                                                                                                                               |
| /dev      | Contains special device files that can be used for special purposes (`/dev/sda` for a SATA drive, `/dev/null` for blank data, `/dev/random` for pseudo-random data, `/dev/tty` for terminal sessions, etc). |
| /etc      | Contains system-wide settings and configuration files.                                                                                                                                                      |
| /home     | User data                                                                                                                                                                                                   |
| /lib      | Libraries required for executables in `/bin` to function. May be also named `/lib<arch>` for multi-architecture support.                                                                                    |
| /media    | Mount points for removable media, such as USB drives, SD cards, etc.                                                                                                                                        |
| /mnt      | Temporary mount points for mounting devices.                                                                                                                                                                |
| /opt      | Optional packages that may be installed by the user.                                                                                                                                                        |
| /proc     | Process data and kernel information for inter-process communication managed by the kernel.                                                                                                                  |
| /root     | User data for the root user.                                                                                                                                                                                |
| /sbin     | Executables for system tasks                                                                                                                                                                                |
| /srv      | Shared service data used by server processes, such as web servers and NAS/File servers.                                                                                                                     |
| /tmp      | Temporary data                                                                                                                                                                                              |
| /usr      | Shared application data used by all users.                                                                                                                                                                  |
| /var      | Variable data used by system processes.                                                                                                                                                                     |
|           |                                                                                                                                                                                                             |
|           |                                                                                                                                                                                                             |


## The Home Directory

The home folder is the place where all your personal data is stored. It is a directory that is located under the `/home` directory, followed by the username. It is similar to the `Users` folder in Windows.

In Linux, the home folder is usually more extensively used than in Windows, as it stores all user-specific data and app settings. The system folders are only used when one wants to make system-wide changes.

<alert type=warning>

If an app you don't know asks you for your password or root access, It may be trying to compromise your system. Cases like this are usually uncommon on Linux, but you should be aware of it.

</alert>



