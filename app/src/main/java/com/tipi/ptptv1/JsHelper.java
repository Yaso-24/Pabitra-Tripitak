package com.tipi.ptptv1;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.webkit.JavascriptInterface;

public class JsHelper {
    private  Activity activity;
    private Context context;
    public JsHelper(Activity activity, Context context) {
        this.activity = activity;
        this.context = context;
    }
    @JavascriptInterface
    public void update(){
        Intent intent = new Intent( Intent.ACTION_VIEW );
        intent.setData( Uri.parse( "https://play.google.com/store/apps/details?id="+ activity.getPackageName() ) );
        activity.startActivity( intent );
    }
    @JavascriptInterface
    public void share(){
        Intent shareinginten = new Intent( Intent.ACTION_SEND );
        shareinginten.setType( "text/plain" );
        shareinginten.putExtra( Intent.EXTRA_SUBJECT,"পবিত্র ত্রিপিটক অ্যান্ড্রয়েড অ্যাপ" );
        shareinginten.putExtra( Intent.EXTRA_TEXT, "বাংলা ভাষায় প্রথম পূর্ণাঙ্গ পবিত্র ত্রিপিটক অ্যাড্রয়েড অ্যাপ ডাউনলোড করুন ⬇⬇⬇" +
                "\nhttps://play.google.com/store/apps/details?id=" + activity.getPackageName());
        activity.startActivity(Intent.createChooser( shareinginten,  "শেয়ার করুন" ));
    }
    @JavascriptInterface
    public void rate(){
        Intent intent = new Intent( Intent.ACTION_VIEW );
        intent.setData( Uri.parse( "https://play.google.com/store/apps/details?id="+ activity.getPackageName() ) );
        activity.startActivity( intent );
    }
}
