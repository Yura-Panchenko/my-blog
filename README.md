# my-blog

Для початку роботи над проектом потрібно поставити збірку командою

    pnpm create vite

Перейти в папку з проектом і запустити його

    npx degit user/project my-project
    cd my-project

    npm install
    npm run dev

Для настройки сервера, в файлі vite.config.js зробити необхідні налаштування

    export default defineConfig({
        plugins: [react()],
        server: {
            open: ".",
            port: 3000,
        }
    })
