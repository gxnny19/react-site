import Book from './Book'
function Library() {
    return (
        <div>
            <Book name="html" numOfPage="100" />
            <Book name="css" numOfPage="300" />
            <Book name="git" numOfPage="200" />
            <Book name="js" numOfPage="800" />
        </div>
    )
}
export default Library