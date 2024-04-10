from django.contrib import admin

# Register your models here.
from api.models import Category, Product

# admin.site.register(Category)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'category',
        'name',
        'description',
        'price',
        'count',
        'is_active'
    )