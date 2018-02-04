package com.gc.automation.gccontroller;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.util.concurrent.TimeUnit;

public class newUnits {


    public static void run() {
        Thread thread = new Thread("MyThread") {
            public void run() {
                try {
                    System.out.println("Tests");
                    listen();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        };
        thread.start();


    }

    protected MulticastSocket Socket = null;
    private static InetAddress group;
    static int broadcastPost = 4446;
    static String multicastMessage = "Single Controler wants unit";

    private static void listen() throws IOException {
        // Get the address that we are going to connect to.
        InetAddress address = InetAddress.getByName("224.0.0.3");

        // Create a buffer of bytes, which will be used to store
        // the incoming bytes containing the information from the server.
        // Since the message is small here, 256 bytes should be enough.
        byte[] buf = new byte[256];

        // Create a new Multicast socket (that will allow other sockets/programs
        // to join it as well.
        try (MulticastSocket clientSocket = new MulticastSocket(broadcastPost)) {
            //Joint the Multicast group.
            clientSocket.joinGroup(address);

            while (true) {
                // Receive the information and print it.
                DatagramPacket msgPacket = new DatagramPacket(buf, buf.length);
                clientSocket.receive(msgPacket);

                String msg = new String(buf, 0, msgPacket.getLength() - 1);
                System.out.println("Socket 1 received msg: " + msg + " size" + msgPacket.getLength());
                TimeUnit.SECONDS.sleep(4);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
