# kvn_hub

Минимальный статический сайт, который читает содержимое `data.txt` через `fetch()` и подходит для публикации на GitLab Pages и GitHub Pages.

## Файлы

- `index.html` - страница сайта;
- `script.js` - загрузка `data.txt`;
- `styles.css` - стили;
- `data.txt` - текстовые данные;
- `.gitlab-ci.yml` - публикация на GitLab Pages;
- `.github/workflows/deploy-pages.yml` - публикация на GitHub Pages.

## GitLab Pages

Этот проект уже подготовлен для GitLab Pages. Конфигурация лежит в `.gitlab-ci.yml` и публикует содержимое в папку `public`.

Что сделать в GitLab:

1. Создать новый проект `kvn_hub`.
2. Сделать проект `Private`.
3. Загрузить в него содержимое этой папки и запушить ветку `main`.
4. Дождаться успешного pipeline с job `deploy-pages`.
5. Открыть `Deploy -> Pages`.
6. Включить Pages access control и выбрать `Everyone`, если нужен публичный сайт при приватном проекте.

Важно:

- GitLab Pages умеет работать с `public`, `internal` и `private` проектами.
- На GitLab.com сайт по умолчанию публично доступен в интернете.
- Для приватного проекта можно отдельно управлять доступом к Pages через настройки Pages.
- Точный URL сайта GitLab покажет в `Deploy -> Pages` после первого успешного деплоя.

## GitHub Pages

В репозитории также оставлена рабочая конфигурация для GitHub Pages через GitHub Actions. Она нужна только если вы захотите публиковать этот же сайт и на GitHub.

## Обновление данных

Меняйте `data.txt`, затем выполняйте обычный push. После нового pipeline сайт обновится автоматически.
