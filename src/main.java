import java.util.ArrayList;
import java.util.Scanner;

public class main {

    public static void main(String[] args) {
        ArrayList<String> products = new ArrayList<String>();
        Scanner scan = new Scanner(System.in);
        System.out.println("do you want start?(yes)");
        String anserw0 = scan.next();
        while (anserw0.equals("yes")) {
            System.out.println("pls enter product name");
            products.add(scan.next());

            System.out.println("do you want add next products ? yes/no");
            String anserw = scan.next();

            if (anserw.equals("no")) {
                System.out.println("thanks for focus " + products);
                break;

            }
        }
        System.out.println("do you want go to step 2? enter yes");
        String anserwer = scan.next();
        while (anserwer.equals("yes")) {

            System.out.println("do you add or delete something of your list ? add/delete  " + products);
            String anserw2 = scan.next();
            if (anserw2.equals("add")) {
                System.out.println("enter products to your list");
                products.add(scan.next());
            } else if (anserw2.equals("delete")) {
                System.out.println("enter product name");
                String anserw3 = scan.next();

                for (int  i  = 0;  i<products.size(); i++) {
                    if (products.get(i).equals((anserw3))) {
                        products.remove(i);

                    }
                }
                System.out.println("do you don yet?"+products);
                String anserw4 = scan.next();
                if (anserw4.equals("yes")) {

                    System.out.println("ok done " + products);
                    break;
                }
            }
        }
    }
}