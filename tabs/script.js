function home_display(){
    document.getElementById("home-txt").style.display="block";
    document.getElementById("blog-txt").style.display="none";
    document.getElementById("code-txt").style.display="none";
    document.getElementById("project-txt").style.display="none";
    document.getElementById("about-txt").style.display="none";

    document.getElementById("home-lb").style.cssText = "background: #3e64ff; color: white !important";
    document.getElementById("blog-lb").style.cssText = "background:none; color: none";
    document.getElementById("code-lb").style.cssText = "background:none; color: none";
    document.getElementById("project-lb").style.cssText = "background:none; color: none";
    document.getElementById("about-lb").style.cssText = "background:none; color: none";
}

function blog_display(){
    document.getElementById("home-txt").style.display="none";
    document.getElementById("blog-txt").style.display="block";
    document.getElementById("code-txt").style.display="none";
    document.getElementById("project-txt").style.display="none";
    document.getElementById("about-txt").style.display="none";

    document.getElementById("home-lb").style.cssText = "background:none; color: none";
    document.getElementById("blog-lb").style.cssText = "background: #3e64ff; color: white";
    document.getElementById("code-lb").style.cssText = "background:none; color: none";
    document.getElementById("project-lb").style.cssText = "background:none; color: none";
    document.getElementById("about-lb").style.cssText = "background:none; color: none";
}

function code_display(){
    document.getElementById("home-txt").style.display="none";
    document.getElementById("blog-txt").style.display="none";
    document.getElementById("code-txt").style.display="block";
    document.getElementById("project-txt").style.display="none";
    document.getElementById("about-txt").style.display="none";

    document.getElementById("home-lb").style.cssText = "background:none; color: none";
    document.getElementById("blog-lb").style.cssText = "background:none; color: none";
    document.getElementById("code-lb").style.cssText = "background: #3e64ff; color: white";
    document.getElementById("project-lb").style.cssText = "background:none; color: none";
    document.getElementById("about-lb").style.cssText = "background:none; color: none";
}

function project_display(){
    document.getElementById("home-txt").style.display="none";
    document.getElementById("blog-txt").style.display="none";
    document.getElementById("code-txt").style.display="none";
    document.getElementById("project-txt").style.display="block";
    document.getElementById("about-txt").style.display="none";

    document.getElementById("home-lb").style.cssText = "background:none; color: none";
    document.getElementById("blog-lb").style.cssText = "background:none; color: none";
    document.getElementById("code-lb").style.cssText = "background:none; color: none";
    document.getElementById("project-lb").style.cssText = "background: #3e64ff; color: white";
    document.getElementById("about-lb").style.cssText = "background:none; color: none";
}

function about_display(){
    document.getElementById("home-txt").style.display="none";
    document.getElementById("blog-txt").style.display="none";
    document.getElementById("code-txt").style.display="none";
    document.getElementById("project-txt").style.display="none";
    document.getElementById("about-txt").style.display="block";

    document.getElementById("home-lb").style.cssText = "background:none; color: none";
    document.getElementById("blog-lb").style.cssText = "background:none; color: none";
    document.getElementById("code-lb").style.cssText = "background:none; color: none";
    document.getElementById("project-lb").style.cssText = "background:none; color: none";
    document.getElementById("about-lb").style.cssText = "background: #3e64ff; color: white";
}