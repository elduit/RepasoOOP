function factorial (n:number) {
	var total : number = 1; 
	for (let i = 1; i <= n; i++) {
        total = total * i; 
        
    }
	return(total); 
}