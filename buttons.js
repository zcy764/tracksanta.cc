import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonExample extends JFrame implements ActionListener {
    private JButton button1;
    private JButton button2;

    public ButtonExample() {
        setTitle("Button Example");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Create buttons
        button1 = new JButton("Button 1");
        button2 = new JButton("Button 2");

        // Set action command for buttons
        button1.setActionCommand("Button1Clicked");
        button2.setActionCommand("Button2Clicked");

        // Add action listener to buttons
        button1.addActionListener(this);
        button2.addActionListener(this);

        // Add buttons to the content pane
        Container container = getContentPane();
        container.setLayout(new FlowLayout());
        container.add(button1);
        container.add(button2);
    }

    public void actionPerformed(ActionEvent e) {
        String actionCommand = e.getActionCommand();

        // Handle button clicks
        if (actionCommand.equals("Button1Clicked")) {
            JOptionPane.showMessageDialog(this, "Button 1 clicked!");
        } else if (actionCommand.equals("Button2Clicked")) {
            JOptionPane.showMessageDialog(this, "Button 2 clicked!");
        }
    }

    public static void main(String[] args) {
        ButtonExample example = new ButtonExample();
        example.setVisible(true);
    }
}
