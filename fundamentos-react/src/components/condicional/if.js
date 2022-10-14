export default function ifFunc({children, test}){
    
    const elseChild = children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = children.filter(child => {
        return child !== elseChild
    })

    if(test){
        return ifChildren;
    } else if(elseChild){
        return elseChild
    } else {
        return false;
    }
}

export const Else = props => props.children