#include <iostream>
using namespace std;
int main() {

    int N,i,j,k;

    cin >> N;

    for(i=1;i<=N;i++)
    {
        for(k=N;k>i;k--)
        {
            cout << " ";
        }
        for(j=1;j<=i;j++)
        {
            cout << j;
        }
        cout << endl;
    }

    return 0;
}