package com.example.usbkiller;

import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Menu;
import javafx.scene.control.MenuItem;
import javafx.scene.control.TextField;
import javafx.scene.layout.Border;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import javafx.scene.control.MenuBar;

public class Main extends Application {




    @FXML
    private BorderPane bp;


    @Override
    public void start(Stage primaryStage) throws Exception{
    try {
        Parent root = FXMLLoader.load(getClass().getResource("sample.fxml"));
        //MenuBar Bar  = new MenuBar();
        //Menu fileMenu = new Menu("addRecipe");
        //MenuItem newitem= new MenuItem("new");
        //MenuItem exit = new MenuItem("exit");
       // fileMenu.getItems().addAll(newitem, exit);
        //Bar.getMenus().addAll(fileMenu);
//        bp.setTop(Bar);
        Scene scene = new Scene(root);
        String css = this.getClass().getResource("application.css").toExternalForm();
        scene.getStylesheets().add(css);

        //Menu fileMenu =  new Menu("box menu");
        //MenuItem Item1 = new MenuItem ("newRecipe");
        //MenuItem Item2 = new MenuItem ("seave do dataBase");
        //MenuItem Item3 = new MenuItem ("share");
        //fileMenu.getItems().addAll(Item1, Item2, Item3);
        //MenuBar menuBar = new MenuBar(fileMenu);
        //menuBar.setTranslateX(200);
        //menuBar.setTranslateY(20);
        //Group grup = new Group(menuBar);
        primaryStage.setTitle("CookApp");
        primaryStage.setScene(scene);

        primaryStage.show();
    }catch(Exception e){
        e.printStackTrace();
    }
    }


    public static void main(String[] args) {
        launch(args);
    }
}
