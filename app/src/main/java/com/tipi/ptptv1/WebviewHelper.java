package com.tipi.ptptv1;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.util.Log;
import android.webkit.JsResult;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.appcompat.app.AlertDialog;
import androidx.core.content.ContextCompat;
import androidx.webkit.WebViewCompat;
import androidx.webkit.WebViewFeature;

import java.util.ArrayList;

public class WebviewHelper {
    private Activity activity;
    private Context context;
    private ArrayList srcList;
    private boolean safeBrowsingIsInitialized;
    private WebView webView;
    public WebviewHelper(Activity activity, Context context, WebView webView) {
        this.activity = activity;
        this.context = context;
        this.webView = webView;
    }

    @SuppressLint("SetJavaScriptEnabled")
    public WebView myWebview(String ulr) {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccessFromFileURLs(true);

        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        //settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
        // settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setSupportMultipleWindows(true);
        settings.setGeolocationEnabled(true);
        settings.supportMultipleWindows();
        settings.setGeolocationDatabasePath(activity.getFilesDir().getPath());
        //settings.setAppCacheEnabled(false);
        webView.loadUrl(ulr);

        
        webView.addJavascriptInterface(new JsHelper(activity, context), "android");
        webView.setWebChromeClient(new WebChromeClient(){
            @Override
            public boolean onJsAlert(WebView view, String Lottery, String message, final JsResult result){
                AlertDialog dialog = new AlertDialog.Builder(view.getContext()).
                        setTitle(activity.getString(R.string.app_name)).
                        setMessage(message).setPositiveButton( activity.getString(R.string.okey), new DialogInterface.OnClickListener() {

                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                //do not nothing
                            }
                        }).create();
                dialog.show();
                result.confirm();
                return true;
            }

            @Override
            public boolean onJsConfirm(WebView view, String url, String message, final JsResult result) {

                AlertDialog dialog =new AlertDialog.Builder(view.getContext()).
                        setTitle("Confirm ").
                        setIcon(ContextCompat.getDrawable(view.getContext(),R.drawable.ic_launcher)).
                        setMessage(message).
                        setNegativeButton("No", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                result.cancel();
                            }
                        }).
                        setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                activity.finish();
                                result.confirm();
                            }
                        })
                        .create();
                dialog.show();
                return true;
            }
        });

        // safe Webview section
        webView.setWebViewClient(new MyWebViewClient());
        safeBrowsingIsInitialized = false;
        if (WebViewFeature.isFeatureSupported(WebViewFeature.START_SAFE_BROWSING)) {
            WebViewCompat.startSafeBrowsing(context, new ValueCallback<Boolean>() {
                @Override
                public void onReceiveValue(Boolean success) {
                    safeBrowsingIsInitialized = true;
                    if (!success) {
                        Log.e("MY_APP_TAG", "Unable to initialize Safe Browsing!");
                    }
                }
            });
        }
        return webView;
    }
}
