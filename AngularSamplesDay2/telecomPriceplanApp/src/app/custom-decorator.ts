export function myLogger() {
    return function(constructor: any){
        const componentName = constructor.name;
        console.log(`%c ${componentName} is initialized..`, 'color:red; font-weight:bold');
    }
    

    
}
