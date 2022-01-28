function Palindrome()
	{
		var rem, temp, final = 0;
		var number = 151;

		temp = number;
		while(number>0)
		{
			number = number/10;

			rem = number%10;
			final = final*10+rem;
		}
		if(final===temp)
		{
			console.log("plandrome");
		}
		else
		{
			console.log("not a palindrome");
		}
    }
    
	Palindrome();