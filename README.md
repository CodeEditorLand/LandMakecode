# Microsoft MakeCode Arcade extension for Visual Studio Code

A VS Code extension for making retro-style video games with
[Microsoft MakeCode Arcade](https://arcade.makecode.com/). Code, create pixel
art, and play your game in both native VS Code and
[vscode.dev](https://insiders.vscode.dev/makecode)!

## Starting a new project

To start a new MakeCode project in VS Code, you first need to open an empty
folder (File > Open Folder).

> Note: In vscode.dev, the File menu is located in the hamburger button in the
> top-left corner of the page.

Once you've opened a folder, you can create an empty project by clicking the
"Create a New Project" command in the MakeCode Asset Explorer.

### Importing an existing MakeCode project

If you have a share link for a MakeCode Arcade project, you can also import it
by clicking the "Import Project from URL" command and pasting the URL in the
input that appears.

### Opening an existing GitHub project

If you have opened a GitHub repository that contains a MakeCode Arcade project,
you'll need to install your project's dependencies for features like
intellisense to work. Click the "Install project dependencies" command in the
actions section of the MakeCode Asset Explorer to download and install them.

> Note: You must be connected to the internet in order to download and install
> extensions

## Opening the MakeCode Asset Explorer

You can access the MakeCode Asset Explorer by clicking on the MakeCode icon in
the Visual Studio Code action bar.

![Screenshot of the VS code action bar with an arrow pointing to the MakeCode Arcade Asset Explorer](./images/action-bar.png)

## Running actions in the MakeCode Asset Explorer

At the top of the asset explorer you'll find a list of commands for managing
MakeCode Arcade projects. Click on a command to run it!

![Screenshot of the MakeCode Asset Explorer with a red box around the command list](./images/command-list.png)

## Anatomy of a MakeCode project

Inside your MakeCode project, you'll see a folder structure that looks something
like this:

```
project/
├─ built/
├─ main.ts
└─ pxt.json
   ...
```

Don't worry if you don't see all of these files or if your project contains more
than what's listed here! We're just going to go over the important ones first:

-   `built/` contains all of the compiled code for your project. If you compile
    your project, the result will show up inside this directory.
-   `main.ts` is the main code file for your project. This code will run when
    you run your game.
-   `pxt.json` is the file that configures your project. More on that below!

Some other files you might see in your project include:

-   `*.jres` and `*.g.jres` - these files contain the assets for your project
    like images, animations, songs, and tilemaps. See "Managing your project's
    assets" below for more information on assets.
-   `*.g.ts` - these files are autogenerated when the assets for your project
    change. Don't edit these by hand!
-   `README.md` - this is a markdown file where you can add documentation for
    your project that other people can read when they import it.
-   `main.blocks` - if you imported your project, it might have a blocks file
    inside. You can't edit this file inside of VS code!
-   `tsconfig.json` - this file is required to make features like intellisense
    work in the editor. You probably don't need to edit it!
-   `.github`, `mkc.json`, `.vscode`, `.gitignore`, `.prettierrc`,
    `assets.json` - These are all advanced configuration files. You can safely
    ignore them!

### pxt.json

`pxt.json` is a very important file that is required in all MakeCode projects.
Be careful when editing this file! If it isn't valid JSON or is missing required
fields, your project might stop working. Always check for errors before saving
it!

Some of the important fields include:

-   **name** - The name of the project. When you create a MakeCode share link,
    this name is what people will see. Try to make it descriptive!
-   **description** - A description of your project.
-   **dependencies** - This field contains all of the extensions used by your
    project. To add/remove an extension, see the sections below. By default, all
    arcade projects depend on the `device` extension; make sure not to remove it
    if you want your project to work with MakeCode Arcade!
-   **files** - This is a list of the files in your project. All `.ts`, `.jres`,
    `.g.ts`, `.g.jres`, and `.md` files should be listed here.
-   **palette (optional)** - This optional field can be used to change the 15
    colors that MakeCode Arcade uses for its color palette. More information
    [here](https://arcade.makecode.com/developer/images).
-   **version (optional)** - This optional field is used to set the version of
    your project. Versions should be in the from 0.0.0 (aka
    [semantic versioning](https://semver.org/)). This field is mostly just for
    extensions.
-   **testFiles (optional)** - This optional field lists files to include when
    building the project itself, but not include when the project is added to
    another project as an extension. It's useful for testing out your code if
    you are authoring an extension.

### Adding a file to your project

Whenever you create a new file that you want to be included in your project, you
need to add it to the **files** entry inside `pxt.json`. If you aren't seeing
your changes when you run your game, make sure you didn't leave a file out!

## Run your project in the simulator

![Screenshot of VS Code with the MakeCode simulator open and the "Start MakeCode simulator" command highlighted](./images/simulator-pane.png)

Click the "Start MakeCode Simulator" command in the MakeCode Asset Explorer to
run your game inside of VS Code. A new view pane will open after the project has
finished compiling and will automatically reload whenever you save a file in the
open workspace.

To use your keyboard to control the simulator, make sure you first click on the
simulator pane so that it has focus.

### Viewing the simulator console

All serial messages and exceptions from the simulator are printed in VS Code's
output view pane. If the output view pane is hidden, you can open it from the
View menu in the top bar (View > Output).

> Note: In vscode.dev, the View menu is located in the hamburger button in the
> top-left corner of the page

Once the pane is visible you can view all MakeCode messages by selecting
"MakeCode" from the dropdown in the top-right:

![Screenshot of VS Code with the output pane open and a red arrow pointing to a dropdown with MakeCode selected](./images/output-pane.png)

## Managing your project assets

All of your projects images, tilemaps, animations, and songs will be listed
inside the MakeCode Arcade Asset Explorer. Clicking on an asset from this list
will open the asset editor. Any changes made to an asset inside of this editor
will be automatically saved in your project.

### Creating an asset

To create a new asset, hover over the asset type in the MakeCode Asset Explorer
and click the "Create File" icon that appears:

![Screenshot of the MakeCode Asset Explorer with a red arrow pointing to the create icon in the images section](./images/create-new-asset.png)

### Editing assets

To edit an existing asset, click on its name in the asset explorer to open it in
the asset editor. To rename an asset, change its name in the text input that
appears in the bottom of the asset editor. If you don't see the text input, you
may need to increase the width of the pane that the asset editor is in.

![Screenshot of VS Code with the asset editor open to a cat sprite and a red box around the asset name.](./images/asset-rename.png)

### Deleting and duplicating assets

When you hover over the name of an asset, two icons will appear next to it:

![Screenshot of the MakeCode Asset Explorer with a red square around two icons next to the name of an image asset](./images/duplicate-delete.png)

Clicking the trash can icon will delete the asset from your project. Be careful,
there is no undo for this operation!

Clicking the copy icon will duplicate the asset and open the copy in the asset
editor.

### Referencing assets inside your code

To reference an asset you've created inside your code, you can use the name you
gave it with one of the tagged templates on the `assets` namespace:

```ts
let myImage = assets.image`imageName`;
let myAnimation = assets.animation`animName`;
let myTile = assets.tile`tileName`;
let myTilemap = assets.tilemap`tilemapName`;
let mySong = assets.song`songName`;
```

You can also create or edit an asset referenced in code using Code Actions:

![Screenshot of code actions provided for a MakeCode Asset with red arrows pointing at the code actions icon and two sample code action suggestions.](./images/edit-asset-inline.png)

## Adding an extension to your project

To add a MakeCode extension to your project, click the "Add an Extension"
command in the actions section of the MakeCode Asset Explorer. Then either
select an extension from the list that appears or paste a GitHub URL for an
extension repo in the text input and press Enter.

> Note: You must be online to add an extension to your project

After you add an extension to your project, an entry for it will automatically
appear inside your `pxt.json` file.

### Removing an extension from a project

To remove an extension, run the "MakeCode: Remove an Extension" command in the
VS Code command palette and select the extension to remove.

### Reinstalling project extensions

If you manually edited your project's `pxt.json` file and need to reinstall the
project's dependencies, click the "Install Project Dependencies" command in the
actions section of the MakeCode Asset Explorer.

## Downloading a project to hardware

To compile your project and download it to hardware (e.g. a Meowbit), first run
the "Build Project for Hardware" command in the actions section of the MakeCode
Asset Explorer. Once the compile finishes, you can find the generated hex/uf2
file under the `built/` folder in your project workspace. Depending on what
hardware you selected to compile for, the file may be under a subdirectory (e.g.
`built/n3/binary.hex`). The file will be named either `binary.hex` or
`binary.uf2`.

### Flashing hardware from native VS Code

1. Right click on the uf2/hex file in your `built/` folder and select "Reveal in
   File Explorer" or "Reveal in Finder" to locate the downloaded file on your
   computer:

![Screenshot of VS Code with the right-click context menu open over the file binary.uf2](./images/reveal-in-file-explorer.png)

2. Connect your hardware to the computer with a USB cable. It should appear as a
   USB drive in your computer's file explorer. If you don't see the USB drive,
   see "Troubleshooting hardware connections" below.
3. Drag the file you located into the USB drive for your hardware. It should
   automatically reset and load with your compiled game.

### Flashing hardware from vscode.dev

1. Right click on the uf2/hex file in your `built/` folder and select
   "Download..." to download the uf2/hex file to your computer:

![Screenshot of VS Code with the right-click context menu open over the file binary.hex](./images/download-hex.png)

2. Connect your hardware to the computer with a USB cable. It should appear as a
   USB drive in your computer's file explorer. If you don't see the USB drive,
   see "Troubleshooting hardware connections" below.
3. Drag the file you downloaded into the USB drive for your hardware. It should
   automatically reset and load with your compiled game.

### Troubleshooting hardware connections

If your hardware is failing to show up as a USB drive when you plug it in, try
the following steps:

1. Try a different USB cable (some USB cables are power-only and will not allow
   data transfer).
2. Try updating the firmware for your device. Follow the manufacturer's
   instructions for how to do this with your device.
3. As a last resort, try a different computer. There may be a device policy in
   place that is restricting access to USB ports.

## Sharing your project

To create a MakeCode share link for your project, click the "Create MakeCode
Share Link" command in the MakeCode Asset Explorer. This will cause the output
pane to open with a link that you can copy/paste.

To change the name of your shared project, see the `pxt.json` section above.

## Local development

See the [developer guide](./development.md) for info on developing
vscode-makecode.

## Contributing

This project welcomes contributions and suggestions. Most contributions require
you to agree to a Contributor License Agreement (CLA) declaring that you have
the right to, and actually do, grant us the rights to use your contribution. For
details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether
you need to provide a CLA and decorate the PR appropriately (e.g., status check,
comment). Simply follow the instructions provided by the bot. You will only need
to do this once across all repos using our CLA.

This project has adopted the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the
[Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any
additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or
services. Authorized use of Microsoft trademarks or logos is subject to and must
follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must
not cause confusion or imply Microsoft sponsorship. Any use of third-party
trademarks or logos are subject to those third-party's policies.
