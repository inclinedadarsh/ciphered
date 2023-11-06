# Contributing Guide

## Ways to contribute

- **Open an issue**: If you fine an bug while using the application, make sure to open an issue for it. Do mention the algorithm type, key used, plain text and cipher text. You can also open an issue for a feature request or algorithm request.
- **Add an encryption algorithm**: If you want to add an encryption algorithm, you can open an issue for it and get that assigned to yourself. A brief guide on how to add encryption algorithm to the project can be found in [Steps to add a new algorithm](#steps-to-add-a-new-algorithm) section.
- **Refactor the code**: This project started to be build quickly. But now this project needs a lot of code refactoring. If you see an file, feature, section that you think can be refacotred for better usability/readability, go ahead an open an issue on that and solve that.
- **Solve an issue**: You can solve an already raised bug or create a feautre requested in the issues section.

## Installation & code contribution

Below are step by step process on how to run this app locally and contribute to the project

1. Fork this repository

2. Clone this repository. You can do that by executing the following command in your terminal
    ```sh
    git clone git@github.com:<your_username>/ciphered
    ```
    
3. Install all the required dependencies. You can do that by first changing the current directory using `cd ciphered` and then running the following command:
    ```sh
    pnpm i
    ```
    This project uses [pnpm](https://pnpm.io/) and [NodeJS](https://nodejs.org/en). You will need to install them to run this project locally.

4. Optional Step: Create a new branch

   If you're solving an issue or making some code contributions, it is very much recommended to make a new branch. This can be done by executing the following command (provided that you're already in the project directory):
   ```sh
   git checkout -b <new_branch_name>
   ```

5. Now run the application locally using the follwing command:
   ```sh
   pnpm dev
   ```

6. Write some code and then commit it. First, stage all the files using `git add .` and then you can commit using
   ```sh
   git commit -m "YOUR_MESSAGE_HERE"`
   ```
   It is highly recommended to use [Conventional Commit](https://www.conventionalcommits.org/) messages while making a commit.

7. Push your changes onto the branch:
   ```sh
   git push -u origin <new_branch_name>
   ```

8. Create a pull request.

   While creating a pull request, make sure to add the followings:
   1. Issue number: Which issue does your PR solves
   2. Changes made: What exactly are the changes that your code does
   3. Breaking changes: Does your code breaks something
   4. Documentation Update: Did your code need an update in the docs, if yes, then did you make those?
  
9. Done!

## Steps to add a new algorithm

Following are all the changes you'll have to make to add a new algorithm in the project.
> Before working on a new algorithm, make sure to open an issue for that and get yourself assigned on it.

1. Add the algorithm logic:
   Add a new class (file) that exports the algorithm. The exported item should be a class with the `encrypt` and `decrypt` method.

   Checkout [Caesar Cipher Algorithm](https://github.com/inclinedadarsh/ciphered/blob/main/src/lib/algorithms/caesar-cipher.ts) from the codebase.

   The file should be in the `/src/lib/algorithms/` directory.

2. Export the algorithm:
   Import the algorithm in the [`/src/lib/algorithms/index.ts`](https://github.com/inclinedadarsh/ciphered/blob/main/src/lib/algorithms/index.ts) file and then export it from there.

3. Add the algorithm value in [`/src/types/index.ts`](https://github.com/inclinedadarsh/ciphered/blob/main/src/types/index.ts) file (line 3)

4. Add new `<SelectItem>` component in [`/src/components/Algorithm.tsx`](https://github.com/inclinedadarsh/ciphered/blob/main/src/components/Algorithm.tsx) component for the new algorithm.

5. Implement the logic & key compatibility in [`/src/components/Main.tsx`](https://github.com/inclinedadarsh/ciphered/blob/main/src/components/Main.tsx) file.

## Additional Help

You can contact me ([@inclinedadarsh](https://github.com/inclinedadarsh)) on [Twitter](https://twitter.com/inclinedadarsh) or mail me at [dubeyadarshmain@gmail.com](mailto:dubeyadarshmain@gmail.com)
