//For Avery
#include <iostream>
using namespace std;
	
	//Function declaration
	int funcMultiply()
{
	//Declare vars
	float int02;
	float int01;
	//Get our variables
	cout << "Enter first number to multiply" << endl;
	cin >> int01;
	cout << "Enter second number to multiply" << endl;
	cin >> int02;
	cout << int01 << " times " << int02 << " is: " << int01 << " , " << int02 << " groups." << endl << endl;
	
	//For loops to visualize number groups.

	//Print the numbers on the first line, above the number groups -> []
	for (int z = 1; z <= int02; z++) {
		cout << "  " << z;
		}

	//Line feed
	cout << endl;
	
	//Loop through and print the number group characters []
	for (int k = 0; k < int01; k++) {
				cout << k+1;
		for (int i = 0; i < int02; i++) {
			cout << " " << "[]";
		}
			for (int k = 1; k != int01; k++) {
			cout << endl;
			}

	}
	
	//Display the answer 
	int c;
	c=int01*int02;
	cout << int01 << " times " << int02 << " is: " << c;
		
	//bye
	return 0;
}
int main() 
{
return funcMultiply();
}



