### Hexlet tests and linter status:
[![Actions Status](https://github.com/devchoppa/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/devchoppa/frontend-project-46/actions)

### Maintainability Badge:
[![Maintainability](https://api.codeclimate.com/v1/badges/1f9d79c928780bc67fe6/maintainability)](https://codeclimate.com/github/devchoppa/frontend-project-46/maintainability)

### Test Coverage Badge:
[![Test Coverage](https://api.codeclimate.com/v1/badges/1f9d79c928780bc67fe6/test_coverage)](https://codeclimate.com/github/devchoppa/frontend-project-46/test_coverage)

## Описание
Консольное приложение для вычисления структурных диффов файлов в форматах JSON и YAML.

### Установка

1. Скопировать репозиторий 
   ```sh
   git clone git@github.com:devchoppa/frontend-project-46.git
   ```
2. Установить все необходимые пакеты
   ```sh
   make install
   ```
3. Установить локальные пакеты
   ```sh
   npm link
   ```

### Посмотреть документацию

   Команда:

   ```sh
   gendiff -h
   ```
<a href="https://asciinema.org/a/wXg7v12YdcTdl5ZlfM3EewgdT" target="_blank"><img width = "700" src="https://asciinema.org/a/wXg7v12YdcTdl5ZlfM3EewgdT.svg" /></a>

### Рекурсивное сравнение json файлов

Команда:

   ```sh
   gendiff __fixtures__/file1.json __fixtures__/file2.json
   ```
<a href="https://asciinema.org/a/6D2nVf7QwFv3CjNtBP5k0sklA" target="_blank"><img width = "700" src="https://asciinema.org/a/6D2nVf7QwFv3CjNtBP5k0sklA.svg" /></a>

### Рекурсивное сравнение yaml файлов

Команда:

   ```sh
   gendiff __fixtures__/filepath1.yml __fixtures__/filepath2.yml
   ```
<a href="https://asciinema.org/a/B7RlwqV6gHI5NIs2jEChuFGwz" target="_blank"><img width = "700" src="https://asciinema.org/a/B7RlwqV6gHI5NIs2jEChuFGwz.svg" /></a>

### Плоское сравнение json файлов

Команда:

   ```sh
   gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json
   ```
<a href="https://asciinema.org/a/VN55TgrUYIwuEYxQNtH9FGLLl" target="_blank"><img width = "700"  src="https://asciinema.org/a/VN55TgrUYIwuEYxQNtH9FGLLl.svg" /></a>

### Плоское сравнение yml файлов

Команда:

   ```sh
   gendiff -f plain __fixtures__/filepath1.yml __fixtures__/filepath2.yml
   ```
<a href="https://asciinema.org/a/h5cFuM0fngUH7hoCU5YsbyjZr" target="_blank"><img width = "700" src="https://asciinema.org/a/h5cFuM0fngUH7hoCU5YsbyjZr.svg" /></a>

### Вывод в json. Формат: json

Команда:

   ```sh
   gendiff -f json __fixtures__/file1.json __fixtures__/file2.json
   ```
<a href="https://asciinema.org/a/BXrBTHZxuqKZ85MJqyOxzzkwh" target="_blank"><img width = "700" src="https://asciinema.org/a/BXrBTHZxuqKZ85MJqyOxzzkwh.svg" /></a>

### Вывод в json. Формат: yml

Команда:

   ```sh
   gendiff -f json __fixtures__/filepath1.yml __fixtures__/filepath2.yml
   ```
<a href="https://asciinema.org/a/Ul2UAuYpP23Vrf7IPSey43swa" target="_blank"><img width = "700" src="https://asciinema.org/a/Ul2UAuYpP23Vrf7IPSey43swa.svg" /></a>