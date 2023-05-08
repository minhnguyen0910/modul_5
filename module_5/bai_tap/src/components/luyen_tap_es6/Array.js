export function Array() {
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    const a=names.filter(name => name.includes('J'))
    console.log(a)
    return (
        <div>
            {names.filter(name => name.includes('J')).map(filteredName => (
                <li>
                    {filteredName}
                </li>
            ))}
        </div>
    )
}