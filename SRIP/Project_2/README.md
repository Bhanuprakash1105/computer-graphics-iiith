## Line Rasterization simulation

In digital display systems, everything that is displayed, is displayed in terms of a smallest unit of display, which is called a pixel. This is in contrast to what we perceive the world to be as continuous. The space occupied by any image in digital display system is measured in terms of pixels

Thus we require to transform the continuous space in which we define he geometry of any figure to a discrete space for display in digital displays. This transformation is called rasterization or scan conversion

When a line is transformed from its continuous form of y = mx + c into a discrete form of a set of pixels, this transformation is called line rasterization. Thus when we apply line rasterization technique on a line,   y = mx + c, we obtain the set of pixels that are required to be filled in order to fit the given continuous line in the best possible manner.

## Code Details
##### File Name : home.html

##### File Description :
- This file is the html file which is linked with the style2.css.

- This file contains the links to manual.html and index.html.

- Basic introductory page of the experiment.

##### File Name : manual.html

##### File Description :
- This file is the html file which is linked with the style2.css.

- This file contains the links to home.html and index.html.

- Provides manual of the experiment.

##### File Name : style2.css

##### File Description :
- This file contains the CSS / styling content for home.html and manual.html files.

##### File Name : index.html

##### File Description :
- This file is the main html file which is linked with the style.css and canvas.js files.

- Within the body tags at the begin we can find division for heading, declaration of canvas width and height, and we can find the link for the script "canvas.js file".

- Then we can find four division with id :

> **id = "forFirstInputs"** We can enter the frame width and height or start the experiment with default values.      

> **id = "forSecondInputs"** We can enter the coordinates of 1st end point and 2nd point of the line or go back.

> **id = "forThirdInputs"** We can perform next iterations and previous iterations or go back.

> **id = "forThirdDefaultInputs"** This is for performing next iterations and pervious iterations when we clicked on the button "Start with default values".

##### File Name : style.css

##### File Description :
- This file contains all the CSS / styling part for the index.html.

##### File Name : canvas.js

##### File Description :
- This file contains all the required functions and canvas with 2d context required for the simulation.

- All the major variable used in the file are declared at the beginning
of the file.

- The first if - else block is used for checking whether the canvas is supported by the browser or not.

- If *the canvas is not supported then we get a alert message* else *the rest of the code is executed*.  

- In the else block we have many functions for making the simulation work.

## Instructions  
1. To start the experiment of Rasterization : Line, enter the frame width and height and click on "Enter" button or else click on "Start With Default Values" button.

![](https://github.com/Bhanuprakash1105/computer-graphics-iiith/blob/master/SRIP/Project_2/Codes/Documentation/Images/step1.png)

2. If clicked the "Start With Default Values" button then use "Next Iteration" and "Previous Iteration" buttons for performing the experiment or else click on "Back" button to go back.

![](https://github.com/Bhanuprakash1105/computer-graphics-iiith/blob/master/SRIP/Project_2/Codes/Documentation/Images/defaultStep.png)

3. Else if clicked on the "Enter" button after entering the frame height and frame width, then enter the coordinates of 1st and 2d end points of the line.

4. After entering the 1st and 2nd end points coordinates, click on the "Start" button for proceeding further or else click on "Back" button to go back.

![](https://github.com/Bhanuprakash1105/computer-graphics-iiith/blob/master/SRIP/Project_2/Codes/Documentation/Images/step2.png)

![](https://github.com/Bhanuprakash1105/computer-graphics-iiith/blob/master/SRIP/Project_2/Codes/Documentation/Images/step3.png)

5. After clicking on the "Start" button, now use "Next Iteration" and "Previous Iteration" buttons for Rasterizing the line or else click on "Back" button for going back.

![](https://github.com/Bhanuprakash1105/computer-graphics-iiith/blob/master/SRIP/Project_2/Codes/Documentation/Images/finalStep.png)
