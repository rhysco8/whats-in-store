# What's In Store - WIP

Stock taking app for retail showrooms. What's In Store allows users to create a list of in-store items or check off items against an existing stocktake.

This project was inspired by my time working at a furniture retailer, doing stocktakes using a spreadsheet of all the products expected to be for the showroom. I would print the list, walk round the showroom ticking things off as I went and adding in items which weren't on the list. Then I'd enter the tally for each item into the spreadsheet before sending that off.

This app is designed to help with some of that process by rendering a table of products that you can add to and tally.

## Features

#### Current version

App runs in development mode and displays 3 hardcoded products. You can export the product list as an `.xlsx` file.

![What's In Store current version](images/whats-in-store_v0_2_0.gif)


### Planned features

#### Importing an existing stock list

- [x] Display SKU, description, quantity expected
- [x] Export completed stocktake as excel file
- [ ] Add items to stocktake
- [ ] Mark off items as they’re found using tally function
- [ ] Search SKUs/descriptions

## Setup

#### Clone/download project

```sh
$ cd path/to/project/folder
$ git clone git@github.com:rhysco8/whats-in-store.git
$ cd whats-in-store
```

#### Run tests

```sh
$ npm run test
```

Launches the test runner. Press `a` to run all tests and `q` to quit.

#### Run app

```sh
$ npm start
```

Run the app in development mode, where it can be viewed in the browser at [http://localhost:3000](http://localhost:3000)

## Future features

* Import an existing stocktake (from excel or csv)
* Add the following columns:
	* Photo of item
	* Area of store
	* Comments
* Sort alphabetically/reverse alphabetically or by quantity

## Further info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
