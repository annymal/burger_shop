# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
проблемы: не получалось настроить package.json, необходимо было скопировать с предыдущего проекта, чтобы сработал npm i и появились node modules/
проблемы: несоответствие версий angular/cdk и версии angular, была ошибка : CSP nonse. Решение: удалить node modules и package lock, устаносить вручную npm i angular/cdk@14.2.7, далее установить оставшиеся пакеты npm i, и сделать сборку ng serve
при создании приложения не создался полифил, решение: скопировала с другого проекта (??)
знакомилась со свойством Output: 
