from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields= '__all__'

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'price', 'description', 'count', 'is_active')