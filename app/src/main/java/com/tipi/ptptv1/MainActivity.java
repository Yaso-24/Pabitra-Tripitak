package com.tipi.ptptv1;

import static android.service.controls.ControlsProviderService.TAG;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import androidx.appcompat.widget.Toolbar;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView pTipiWeb;
    private Activity activity;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);




        // Status Bar
        Window window = getWindow();
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(ContextCompat.getColor(this, R.color.my_statusbar_color));

        activity = MainActivity.this;
        context = getApplicationContext();
        pTipiWeb = findViewById(R.id.pTipitaka);
        EdgeToEdge.enable(this);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        WebviewHelper webviewHelper = new WebviewHelper(activity, context, pTipiWeb);
        webviewHelper.myWebview("file:///android_asset/index.html");
        pTipiWeb.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                // lotteryWebView.loadUrl("javascript:getdata()");
                //Log.d(TAG, "onPageFinished: dmjvnhfd" );

            }
        });


    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            switch (keyCode) {
                case KeyEvent.KEYCODE_BACK:
                    if (pTipiWeb.canGoBack()) {
                        pTipiWeb.goBack();
                    } else {
                        pTipiWeb.evaluateJavascript("getState()", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                if (value.contains("index")) {
                                    // this.onReceiveValue(value);
                                    //  Log.d(TAG, "onReceiveValue is null : "+ value);
                                    onBackPressed();
                                    // pTipiWeb.evaluateJavascript("onExit()", null);
                                }else {
                                    //Log.d(TAG, "onReceiveValue not null : "+ value);
                                    pTipiWeb.evaluateJavascript("onBackPress()", null);
                                }
                            }
                        });
                    }
                    return true;
            }
        }
        return super.onKeyDown(keyCode, event);
    }

    boolean doubleBackToExitPressedOnce = false;

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
//        Toast.makeText(this, "Press again back button to Exit", Toast.LENGTH_SHORT).show();
        Toast.makeText(this, "বের হতে ব্যাকবাটন আবার চাপুন", Toast.LENGTH_SHORT).show();

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                doubleBackToExitPressedOnce = false;
            }
        }, 2000);
    }
}