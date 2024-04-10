from django.urls import path
from api.views import get_categories, get_category, get_products, get_product,get_products_by_category, CategoryProducts

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/<int:id>/products/', CategoryProducts.as_view()),

]