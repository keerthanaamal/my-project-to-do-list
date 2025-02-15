"""
URL configuration for project1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from projectapp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('reg',views.register_page),
    path('log',views.login_page),
    path('task',views.task_page),
    path('task_view/',views.task_view),
    path('task_delete', views.task_detail, name='task_detail'), 
    re_path(r'^task/([0-9]+)$',views.task_detail),
    path('task/<int:task_id>/', views.update_task_status, name='update_task_status'),
]
