package com.example.usbkiller;
import javafx.application.Platform;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import java.net.URL;
import java.util.ResourceBundle;



public class Controller implements Initializable {

    //Table
    @FXML
    private TableView<Customer> tableView;

    //Columns
    @FXML
    private TableColumn<Customer, String> nameColumn;

    @FXML
    private TableColumn<Customer, Integer> gramatureColumn;

    @FXML
    private TableColumn<Customer, Integer> recipeColumn;

    //Text input
    @FXML
    private TextField nameInput;

    @FXML
    private TextField gramatureInput;

    @FXML
    private TextField recipeInput;


    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        nameColumn.setCellValueFactory(new PropertyValueFactory<Customer, String>("name"));
        gramatureColumn.setCellValueFactory(new PropertyValueFactory<Customer, Integer>("gramature"));
        recipeColumn.setCellValueFactory(new PropertyValueFactory<Customer, Integer>("recipe"));
    }

    //Submit button
    @FXML
    void submit(ActionEvent event) {
        Customer customer = new Customer(nameInput.getText(),recipeInput.getText(),
                Integer.parseInt(gramatureInput.getText())
                );
        ObservableList<Customer> customers = tableView.getItems();
        customers.add(customer);
        tableView.setItems(customers);
        nameInput.clear(); gramatureInput.clear(); recipeInput.clear();
    }

    @FXML
    void removeCustomer(ActionEvent event) {
        int selectedID = tableView.getSelectionModel().getSelectedIndex();
        tableView.getItems().remove(selectedID);
    }




    @FXML
    private void closeWindow(ActionEvent event){
        javafx.application.Platform.exit();
    }

}
