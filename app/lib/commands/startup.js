export class StartupCommand {

    execute() {
        console.log('-- EXEC startup');
        document.body.innerHTML = 'It works!';
    }

}
